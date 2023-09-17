package br.com.surb.surbmovie.modules.score.dto;

import br.com.surb.surbmovie.modules.score.infra.entities.ScorePK;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ScoreDTO {
	private ScorePK scoreId = new ScorePK();
	private Double value;
}
