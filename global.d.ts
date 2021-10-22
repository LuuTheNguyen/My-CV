declare global {
    interface Window {
        gtag: Gtag.Gtag
    }
}

declare namespace JSX {
	interface AmpImg {
		alt?: string;
		src?: string;
		width?: string;
		height?: string;
		layout?: string;
		class?: string;
	}
    interface AmpFitText{
		width?: string;
		height?: string;
		layout?: string;
        ['min-font-size']?: string;
        children: string
    }
	interface IntrinsicElements {
		'amp-img': AmpImg;
        'amp-fit-text': AmpFitText;
		'amp-script': any;
		'amp-analytics': any;
		'script': any;
	}
}