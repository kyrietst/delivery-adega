import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';
import * as Haptics from 'expo-haptics';

interface NavItem {
    icon: keyof typeof MaterialIcons.glyphMap;
    iconFilled?: keyof typeof MaterialIcons.glyphMap;
    route: string;
    isCenter?: boolean;
}

const NAV_ITEMS: NavItem[] = [
    { icon: 'home', iconFilled: 'home', route: '/' },
    { icon: 'grid-view', route: '/categories' },
    { icon: 'shopping-bag', route: '/cart', isCenter: true },
    { icon: 'favorite-border', iconFilled: 'favorite', route: '/favorites' },
    { icon: 'person-outline', iconFilled: 'person', route: '/loyalty' },
];

export function FloatingNavbar() {
    const router = useRouter();
    const pathname = usePathname();

    const handlePress = (route: string) => {
        Haptics.selectionAsync();
        router.push(route as never);
    };

    const isActive = (route: string) => {
        if (route === '/') return pathname === '/';
        return pathname.startsWith(route);
    };

    return (
        <View className="absolute bottom-6 left-0 right-0 items-center z-50 px-6">
            <View
                className="flex-row items-center justify-evenly h-[72px] w-full max-w-[350px] rounded-full px-2 bg-[#1e2e1a]/90 border border-white/10"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.5,
                    shadowRadius: 20,
                    elevation: 15,
                }}
            >
                {NAV_ITEMS.map((item) => {
                    const active = isActive(item.route);

                    if (item.isCenter) {
                        return (
                            <TouchableOpacity
                                key={item.route}
                                onPress={() => handlePress(item.route)}
                                className="w-14 h-14 -mt-8 rounded-full bg-primary items-center justify-center border-4 border-background-dark"
                                style={{
                                    shadowColor: '#46ec13',
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 10,
                                    elevation: 8,
                                }}
                                activeOpacity={0.8}
                            >
                                <MaterialIcons name={item.icon} size={28} color="#142210" />
                            </TouchableOpacity>
                        );
                    }

                    return (
                        <TouchableOpacity
                            key={item.route}
                            onPress={() => handlePress(item.route)}
                            className="w-14 h-14 rounded-full items-center justify-center"
                            activeOpacity={0.7}
                        >
                            <MaterialIcons
                                name={active && item.iconFilled ? item.iconFilled : item.icon}
                                size={26}
                                color={active ? '#46ec13' : 'rgba(255,255,255,0.4)'}
                            />
                            {active && (
                                <View className="w-1 h-1 rounded-full bg-primary mt-1" />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
