package br.com.surb.surbmovie.modules.score.infra.entities;

import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;
import br.com.surb.surbmovie.modules.user.infra.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ScorePK {
	private User user;
	private Movie movie;
}
