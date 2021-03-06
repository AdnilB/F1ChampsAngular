
/** Data Models are used to structure api data received
 * to only the necessary data for the F1 Championship 
 * application.
 * */

export interface ChampionsYearlyDto{
    MRData: RaceTableDto;
}

export interface RaceTableDto{
    limit: string,
    offset: string,
    total: string,
    RaceTable: RaceTableDtlDto;
}

export interface RaceTableDtlDto{
    season: string;
    position: string;
    Races: RacesDto[];
}


export interface RacesDto{
    date: string;
    raceName: string;
    round: string;
    Results: ResultsDto[];
}


export interface ResultsDto{
    points: string;
    Driver: DriverDto;
}

export interface DriverDto{
    driverId: string;
    givenName: string;
    familyName: string;
}

export interface PointStandingDto{
    driverId: string;
    totalPoints: number;
}

export interface Pagination{
    limit: string,
    offset: string,
    total: string,
}

export interface SeasonStandingsMainDto{
    MRData: SeasonStandingsDto;
}


export interface SeasonStandingsDto{
    StandingsTable: StandingsListsDto;
}

export interface StandingsListsDto{
    StandingsLists: DriverStandingsDto[];
}

export interface DriverStandingsDto{
    DriverStandings: DriverStandingsInfoDto[];
}

export interface DriverStandingsInfoDto{
    Driver: DriverStandingsDtlDto;
}

export interface DriverStandingsDtlDto{
    driverId: string;
}