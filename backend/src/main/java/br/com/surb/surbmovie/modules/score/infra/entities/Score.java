package br.com.surb.surbmovie.modules.score.infra.entities;

import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;
import br.com.surb.surbmovie.modules.user.infra.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Score {
	private ScorePK scoreId = new ScorePK();
	private Double value;

	
	public void setMovie(Movie movie) {
		scoreId.setMovie(movie);
	}
	
	public void setUser(User user) {
		scoreId.setUser(user);
	}
}
