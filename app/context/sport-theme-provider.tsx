import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { getPrimaryButtonStyleBySport, getSecondaryButtonStyleBySport, getTabTriggerStyleBySport, getSelectTriggerStyleBySport, getSelectItemStyleBySport, getSelectContentStyleBySport, getSportBackgroundColor, getPrimaryColorBySport, getSecondaryColorBySport, getSportMainNavActiveTextColor, getSportMainNavBorderColor, getPrimaryTextColorBySport, getSecondaryTextColorBySport, getPrimaryFillColorBySport, getSecondaryFillColorBySport } from '~/lib/theme'

type Sport = 'basketball' | 'volleyball' | 'pickleball' | 'tennis' | 'badminton'

type SportThemeContextType = {
    selectedSport: Sport
    setSelectedSport: (sport: Sport) => void
    sportStyles: {
        colors: {
            primary: string,
            secondary: string,
        },
        mainNavStyle: {
            borderColor: string,
            activeTextColor: string,
        },
        buttonStyle: {
            primary: string
            secondary: string
        };
        textColor: {
            primary: string,
            secondary: string,
        }
        fill: {
            primary: string,
            secondary: string,
        }
        tabTriggerStyle: string
        selectTriggerStyle: string
        selectItemStyle: string
        selectContentStyle: string
        backgroundColor: string
    }
}

const SportThemeContext = createContext<SportThemeContextType | undefined>(undefined)

type SportThemeProviderProps = {
    children: ReactNode
}

export function SportThemeProvider({ children }: SportThemeProviderProps) {
    const [selectedSport, setSelectedSport] = useState<Sport>('basketball')

    const [sportStyles, setSportStyles] = useState({
        colors: {
            primary: "",
            secondary: "",
        },
        mainNavStyle: {
            borderColor: "",
            activeTextColor: "",
        },
        buttonStyle: {
            primary: "",
            secondary: "",
        },
        textColor: {
            primary: "",
            secondary: "",
        },
        fill: {
            primary: "",
            secondary: "",
        },
        tabTriggerStyle: "",
        selectTriggerStyle: "",
        selectItemStyle: "",
        selectContentStyle: "",
        backgroundColor: "",
    });

    useEffect(() => {
        setSportStyles({
            colors: {
                primary: getPrimaryColorBySport(selectedSport),
                secondary: getSecondaryColorBySport(selectedSport),
            },
            mainNavStyle: {
                borderColor: getSportMainNavBorderColor(selectedSport),
                activeTextColor: getSportMainNavActiveTextColor(selectedSport),
            },
            buttonStyle: {
                primary: getPrimaryButtonStyleBySport(selectedSport),
                secondary: getSecondaryButtonStyleBySport(selectedSport),
            },
            textColor: {
                primary: getPrimaryTextColorBySport(selectedSport),
                secondary: getSecondaryTextColorBySport(selectedSport),
            },
            fill: {
                primary: getPrimaryFillColorBySport(selectedSport),
                secondary: getSecondaryFillColorBySport(selectedSport),
            },
            tabTriggerStyle: getTabTriggerStyleBySport(selectedSport),
            selectTriggerStyle: getSelectTriggerStyleBySport(selectedSport),
            selectItemStyle: getSelectItemStyleBySport(selectedSport),
            selectContentStyle: getSelectContentStyleBySport(selectedSport),
            backgroundColor: getSportBackgroundColor(selectedSport),
        });
    }, [selectedSport]);

    const value: SportThemeContextType = {
        selectedSport,
        setSelectedSport,
        sportStyles
    }

    return (
        <SportThemeContext.Provider value={value}>
            {children}
        </SportThemeContext.Provider>
    )
}

export function useSportTheme() {
    const context = useContext(SportThemeContext)
    if (context === undefined) {
        throw new Error('useSportTheme must be used within a SportThemeProvider')
    }
    return context
}
