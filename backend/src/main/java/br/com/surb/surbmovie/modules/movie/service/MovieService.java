package br.com.surb.surbmovie.modules.movie.service;

import org.springframework.stereotype.Service;

import br.com.surb.surbmovie.modules.movie.infra.repository.MovieRepository;
import br.com.surb.surbmovie.modules.movie.service.impl.MovieServiceImpl;

@Service
public class MovieService extends MovieServiceImpl {

	public MovieService(MovieRepository movieRepository) {
		super(movieRepository);
	}

}
