package br.com.surb.surbmovie.modules.movie.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.surb.surbmovie.modules.movie.service.MovieService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/movies")
public class MovieResource {
	private MovieService movieService;
	
	public void handle() {
		movieService.create(null);
	}
}
