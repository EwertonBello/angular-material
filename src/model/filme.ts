
export interface Base_filme {

	title: string;
	opening_crawl: string;
	image: string;
}

export class Filme implements Base_filme{

	title: string;
	opening_crawl: string;
	image: string;

	constructor(filme: Base_filme, image: string)
	{
		this.title = filme.title;
		this.opening_crawl = filme.opening_crawl;
		this.image = image;
	}
}