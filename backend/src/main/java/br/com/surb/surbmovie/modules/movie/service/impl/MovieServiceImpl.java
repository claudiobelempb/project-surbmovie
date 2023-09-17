package br.com.surb.surbmovie.modules.movie.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import br.com.surb.surbmovie.modules.movie.dto.MovieDTO;
import br.com.surb.surbmovie.modules.movie.dto.MovieReviewDTO;
import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;
import br.com.surb.surbmovie.modules.movie.infra.repository.MovieRepository;
import br.com.surb.surbmovie.shared.AppInterfaces.AppCrud;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class MovieServiceImpl implements AppCrud<Long, MovieDTO, MovieReviewDTO, Pageable> {

	private final MovieRepository movieRepository;

	@Override
	@Transactional
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> movies = movieRepository.findAll(pageable);
		return movies.map(movie -> new MovieDTO(movie));
	}

	@Override
	public MovieDTO findById(Long id) {
		Movie movie = movieRepository.findById(id).get();
		return new MovieDTO(movie);
	}

	@Override
	public MovieDTO create(MovieDTO dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MovieDTO update(Long id, MovieDTO dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MovieReviewDTO update(MovieDTO dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateVoid(MovieDTO dto) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}

	

}
