package br.com.surb.surbmovie.modules.movie.infra.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
	private Long movieId;
	private String title;
	private Double score;
	private int count;
	private String url;
	
	
}
