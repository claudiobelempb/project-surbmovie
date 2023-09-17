package br.com.surb.surbmovie.modules.score.infra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.surb.surbmovie.modules.score.infra.entities.Score;
import br.com.surb.surbmovie.modules.score.infra.entities.ScorePK;

@Repository
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
