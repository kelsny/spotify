export interface TrackRestrictionObject {
    reason: "market" | "product" | "explicit";
}

export interface AlbumRestrictionObject {
    reason: "market" | "product" | "explicit";
}

export interface TrackRestrictionObject {
    reason: "market" | "product" | "explicit";
}

export interface ResumePointObject {
    fully_played: boolean;
    resume_position_ms: number;
}

export interface CopyrightObject {
    text: string;
    type: "C" | "P";
}

export interface ErrorObject {
    message: string;
    status: number;
}

export interface PagingObject<Item> {
    href: string;
    items: Item[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}
