package br.com.surb.surbmovie.modules.movie.dto;

import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class MovieMapper {
	
	public static void DtoToFindAll(Movie entity, MovieDTO dto) {
		entity.setTitle(dto.getTitle());
		entity.setScore(dto.getScore());
		entity.setCount(dto.getCount());
		entity.setUrl(dto.getUrl());
	}

	public static void DtoToCreated(Movie entity, MovieDTO dto) {
		entity.setTitle(dto.getTitle());
		entity.setScore(dto.getScore());
		entity.setCount(dto.getCount());
		entity.setUrl(dto.getUrl());
	}

	public static void DtoToUpdated(Movie entity, MovieDTO dto) {
		entity.setTitle(dto.getTitle());
		entity.setScore(dto.getScore());
		entity.setCount(dto.getCount());
		entity.setUrl(dto.getUrl());
	}

}
