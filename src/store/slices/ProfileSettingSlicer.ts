import { atom } from "jotai";

export type ProfileSettingState = {
    adultContent : boolean;
}

const profileSettingInitialState : ProfileSettingState = {
    adultContent: true,
}

const profileSettingAtom = atom<ProfileSettingState>(profileSettingInitialState);

const getAdultContentAtom = atom(
    (get) => get(profileSettingAtom).adultContent,
);

const setAdultContentAtom = atom(
    null,
    (get, set, newValue: boolean) => {
        const currentState = get(profileSettingAtom);
        set(profileSettingAtom, {
            ...currentState,
            adultContent: newValue,
        });
    }
);

export { profileSettingAtom, getAdultContentAtom, setAdultContentAtom };