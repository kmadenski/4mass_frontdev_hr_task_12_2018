import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Planet } from './dummy';
import { MainService } from './main/main.service';
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";

export class PlanetDataSource implements DataSource<Planet> {

  private planetSubject = new BehaviorSubject<Planet[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  private loadingCount = new BehaviorSubject<number>(0);
  public counter$ = this.loadingCount.asObservable();

  constructor(private mainService: MainService) { }

  connect(collectionViewer: CollectionViewer): Observable<Planet[]> {
    return this.planetSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.planetSubject.complete();
    this.loadingSubject.complete();
  }

  loadPlantes(page: number, filter: string) {
    this.loadingSubject.next(true);
    this.mainService.findPlanets(page, filter).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false)))
      .subscribe(planets => {
        this.planetSubject.next(planets["results"]);
        this.loadingCount.next(planets["count"]);
      }
      );
  }
}
