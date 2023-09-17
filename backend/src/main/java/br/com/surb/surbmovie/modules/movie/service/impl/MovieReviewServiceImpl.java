package br.com.surb.surbmovie.modules.movie.service.impl;

import org.springframework.data.domain.Pageable;

import br.com.surb.surbmovie.modules.movie.dto.MovieDTO;
import br.com.surb.surbmovie.modules.movie.dto.MovieReviewDTO;
import br.com.surb.surbmovie.shared.AppInterfaces.AppCrud;

public interface MovieReviewServiceImpl extends AppCrud<Long, MovieDTO, MovieReviewDTO, Pageable> {

	MovieDTO update(MovieReviewDTO dto);
	
}
