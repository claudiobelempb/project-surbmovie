package br.com.surb.surbmovie.modules.movie.infra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
