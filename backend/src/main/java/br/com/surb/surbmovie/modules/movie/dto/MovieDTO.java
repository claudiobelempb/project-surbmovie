package br.com.surb.surbmovie.modules.movie.dto;

import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieDTO {
	private Long movieId;
	private String title;
	private Double score;
	private int count;
	private String url;
	
	public MovieDTO(Movie entitie) {
		movieId = entitie.getMovieId();
		title = entitie.getTitle();
		score = entitie.getScore();
		count = entitie.getCount();
		url = entitie.getUrl();
	}
}
