import { ReactNode } from "react";

export interface MetricProps {
    count: number;
    text: string;
    icon: ReactNode;
    countSuffix?: string;
    isWholeNumber?: boolean;
}