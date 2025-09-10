export const getPrimaryColorBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'basketball-primary-900';
        case "volleyball": return 'volleyball-primary-900';
        case "tennis": return 'tennis-primary-900';
        case "badminton": return 'badminton-primary-900';
        case "pickleball": return 'pickleball-primary-900';
        default: return 'basketball-primary-900';
    }
}
export const getSecondaryColorBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'basketball-primary-500';
        case "volleyball": return 'volleyball-primary-500';
        case "tennis": return 'tennis-primary-500';
        case "badminton": return 'badminton-primary-500';
        case "pickleball": return 'pickleball-primary-500';
        default: return 'basketball-primary-500';
    }
}

export const getPrimaryFillColorBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'fill-basketball-primary-900';
        case "volleyball": return 'fill-volleyball-primary-900';
        case "tennis": return 'fill-tennis-primary-900';
        case "badminton": return 'fill-badminton-primary-900';
        case "pickleball": return 'fill-pickleball-primary-900';
        default: return 'fill-basketball-primary-900';
    }
}

export const getSecondaryFillColorBySport = (sport: string) => {    
    switch (sport) {
        case "basketball": return 'fill-basketball-primary-500';
        case "volleyball": return 'fill-volleyball-primary-500';
        case "tennis": return 'fill-tennis-primary-500';
        case "badminton": return 'fill-badminton-primary-500';
        case "pickleball": return 'fill-pickleball-primary-500';
        default: return 'fill-basketball-primary-500';
    }
}

export const getPrimaryTextColorBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'text-basketball-primary-900';
        case "volleyball": return 'text-volleyball-primary-900';
        case "tennis": return 'text-tennis-primary-900';
        case "badminton": return 'text-badminton-primary-900';
        case "pickleball": return 'text-pickleball-primary-900';
        default: return 'text-basketball-primary-900';
    }
}

export const getSecondaryTextColorBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'text-basketball-primary-500';
        case "volleyball": return 'text-volleyball-primary-500';
        case "tennis": return 'text-tennis-primary-500';
        case "badminton": return 'text-badminton-primary-500';
        case "pickleball": return 'text-pickleball-primary-500';
        default: return 'text-basketball-primary-500';
    }
}

export const getPrimaryButtonStyleBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'bg-gradient-to-b from-basketball-primary-900 to-basketball-primary-500 text-white hover:brightness-110';
        case "volleyball": return 'bg-gradient-to-b from-volleyball-primary-900 to-volleyball-primary-500 text-white hover:brightness-110';
        case "tennis": return 'bg-gradient-to-b from-tennis-primary-900 to-tennis-primary-500 text-white hover:brightness-110';
        case "badminton": return 'bg-gradient-to-b from-badminton-primary-900 to-badminton-primary-500 text-white hover:brightness-110';
        case "pickleball": return 'bg-gradient-to-b from-pickleball-primary-900 to-pickleball-primary-500 text-white hover:brightness-110';
        default: return 'bg-gradient-to-b from-basketball-primary-900 to-basketball-primary-500 text-white hover:brightness-110';
    }
};

export const getSecondaryButtonStyleBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'bg-basketball-primary-900 text-white hover:bg-basketball-primary-900 hover:!brightness-110';
        case "volleyball": return 'bg-volleyball-primary-900 text-white hover:bg-volleyball-primary-900 hover:!brightness-110';
        case "tennis": return 'bg-tennis-primary-900 text-white hover:bg-tennis-primary-900 hover:!brightness-110';
        case "badminton": return 'bg-badminton-primary-900 text-white hover:bg-badminton-primary-900 hover:!brightness-110';
        case "pickleball": return 'bg-pickleball-primary-900 text-white hover:bg-pickleball-primary-900 hover:!brightness-110';
        default: return 'bg-basketball-primary-900 text-white hover:bg-basketball-primary-900 hover:!brightness-110';
    }
};

export const getTabTriggerStyleBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'bg-basketball-primary-100 text-basketball-primary-900 data-[state=active]:text-white data-[state=active]:bg-gradient-to-b from-basketball-primary-900 to-basketball-primary-500';
        case "volleyball": return 'bg-volleyball-primary-100 text-volleyball-primary-900 data-[state=active]:text-white data-[state=active]:bg-gradient-to-b from-volleyball-primary-900 to-volleyball-primary-500';
        case "tennis": return 'bg-tennis-primary-100 text-tennis-primary-900 data-[state=active]:text-white data-[state=active]:bg-gradient-to-b from-tennis-primary-900 to-tennis-primary-500';
        case "badminton": return 'bg-badminton-primary-100 text-badminton-primary-900 data-[state=active]:text-white data-[state=active]:bg-gradient-to-b from-badminton-primary-900 to-badminton-primary-500';
        case "pickleball": return 'bg-pickleball-primary-100 text-pickleball-primary-900 data-[state=active]:text-white data-[state=active]:bg-gradient-to-b from-pickleball-primary-900 to-pickleball-primary-500';
        default: return 'bg-basketball-primary-100 text-basketball-primary-900 data-[state=active]:text-white data-[state=active]:bg-gradient-to-b from-basketball-primary-900 to-basketball-primary-500';
    }
};

export const getSelectTriggerStyleBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'bg-basketball-primary-100 text-basketball-primary-900';
        case "volleyball": return 'bg-volleyball-primary-100 text-volleyball-primary-900';
        case "tennis": return 'bg-tennis-primary-100 text-tennis-primary-900';
        case "badminton": return 'bg-badminton-primary-100 text-badminton-primary-900';
        case "pickleball": return 'bg-pickleball-primary-100 text-pickleball-primary-900';
        default: return 'bg-basketball-primary-100 text-basketball-primary-900';
    }
}

export const getSelectContentStyleBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'bg-basketball-primary-100';
        case "volleyball": return 'bg-volleyball-primary-100';
        case "tennis": return 'bg-tennis-primary-100';
        case "badminton": return 'bg-badminton-primary-100';
        case "pickleball": return 'bg-pickleball-primary-100';
        default: return 'bg-basketball-primary-100';
    }
}

export const getSelectItemStyleBySport = (sport: string) => {
    switch (sport) {
        case "basketball": return 'hover:!text-white hover:!bg-basketball-primary-500 focus:!bg-basketball-primary-500 focus:!text-white';
        case "volleyball": return 'hover:text-white hover:bg-gradient-to-b from-volleyball-primary-900 to-volleyball-primary-500';
        case "tennis": return 'hover:text-white hover:bg-gradient-to-b from-tennis-primary-900 to-tennis-primary-500';
        case "badminton": return 'hover:text-white hover:bg-gradient-to-b from-badminton-primary-900 to-badminton-primary-500';
        case "pickleball": return 'hover:text-white hover:bg-gradient-to-b from-pickleball-primary-900 to-pickleball-primary-500';
        default: return 'hover:text-white hover:bg-gradient-to-b from-basketball-primary-900 to-basketball-primary-500';
    }
}

export const getSportBackgroundColor = (sportName: string): string => {
    switch (sportName) {
        case "basketball": return "bg-basketball-background";
        case "volleyball": return "bg-volleyball-background";
        case "tennis": return "bg-tennis-background";
        case "badminton": return "bg-badminton-background";
        case "pickleball": return "bg-pickleball-background";
        default: return "bg-basketball-background";
    }
};


export const getSportMainNavBorderColor = (sport: string) => {
    switch (sport) {
        case "basketball": return "border-basketball-primary-500";
        case "volleyball": return "border-volleyball-primary-500";
        case "tennis": return "border-tennis-primary-500";
        case "badminton": return "border-badminton-primary-500";
        case "pickleball": return "border-pickleball-primary-500";
        default: return "border-basketball-primary-500";
    }
}

export const getSportMainNavActiveTextColor = (sport: string) => {
    switch (sport) {
        case "basketball": return "text-basketball-primary-500";
        case "volleyball": return "text-volleyball-primary-500";
        case "tennis": return "text-tennis-primary-500";
        case "badminton": return "text-badminton-primary-500";
        case "pickleball": return "text-pickleball-primary-500";
        default: return "text-basketball-primary-500";
    }
}