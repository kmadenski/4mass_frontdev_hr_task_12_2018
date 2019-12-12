export interface PaginationModel {
  
  nextPageFromMainArray: string,
  prvPageFromMainArray: string,
  nextPageFromSearch: string,
  prvPageFromSearch: string

}


export interface DataModel {
  count:    number;
  next:     string;
  previous: null;
  results:  Planet[];
}

export interface Planet {
  name:            string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
  residents:       string[];
  films:           string[];
  created:         string;
  edited:          string;
  url:             string;
}
