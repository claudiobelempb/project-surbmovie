package br.com.surb.surbmovie.modules.movie.resource;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.surb.surbmovie.modules.movie.dto.MovieDTO;
import br.com.surb.surbmovie.modules.movie.dto.MovieReviewDTO;
import br.com.surb.surbmovie.modules.movie.service.MovieReviewService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/reviews")
public class MovieReviewResource {

	private MovieReviewService movieReviewService;

	@PutMapping
	public MovieDTO update(@RequestBody MovieReviewDTO dto) {
		MovieDTO movieDto = movieReviewService.update(dto);
		return movieDto;
	}

}
