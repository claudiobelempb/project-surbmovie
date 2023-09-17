package br.com.surb.surbmovie.modules.movie.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieReviewDTO {
	private Long movieId;
	private String email;
	private Double score;

}
