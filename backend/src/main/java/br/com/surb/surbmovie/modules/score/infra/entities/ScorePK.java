package br.com.surb.surbmovie.modules.score.infra.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;
import br.com.surb.surbmovie.modules.user.infra.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Embeddable
public class ScorePK implements Serializable{

	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "movie_id")
	private Movie movie;
	
}
