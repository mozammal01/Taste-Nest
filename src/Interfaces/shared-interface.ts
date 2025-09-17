import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export interface Testimonial {
  author: string;
  review: string;
}
