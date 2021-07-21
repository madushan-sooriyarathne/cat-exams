declare global {
  interface Image {
    src: string;
    alt?: string;
    blurUrl: string;
  }

  type AlignmentType = "left" | "right" | "center";
}

export {};
