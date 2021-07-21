export class SlideModel  {
    url: string;
    isActive: boolean;
    link: string;

    constructor(url: string, isActive: boolean, link: string) {
        this.url = url;
        this.isActive = isActive;
        this.link = link;
    }
}