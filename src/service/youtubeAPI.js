class YoutubeAPI {
	constructor(key){
		this.key = key;
		this.getRequestOptions = {
		  method: 'GET',
		  redirect: 'follow'
		};
	};

	async mostPopularList (){
		const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=24&regionCode=kr&key=${this.key}`,
			this.getRequestOptions);
		const result_1 = await response.json();
		return result_1;
	}

	async searchList (keyword){
		const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${keyword}&key=${this.key}`,
			this.getRequestOptions);
		const result_1 = await response.json();
		return result_1;
	}
	
}

export default YoutubeAPI;