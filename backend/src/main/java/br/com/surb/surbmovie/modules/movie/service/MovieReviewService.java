package br.com.surb.surbmovie.modules.movie.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;

import br.com.surb.surbmovie.modules.movie.dto.MovieDTO;
import br.com.surb.surbmovie.modules.movie.dto.MovieReviewDTO;
import br.com.surb.surbmovie.modules.movie.infra.entities.Movie;
import br.com.surb.surbmovie.modules.movie.infra.repository.MovieRepository;
import br.com.surb.surbmovie.modules.movie.service.impl.MovieReviewServiceImpl;
import br.com.surb.surbmovie.modules.score.infra.entities.Score;
import br.com.surb.surbmovie.modules.score.infra.repository.ScoreRepository;
import br.com.surb.surbmovie.modules.user.infra.entities.User;
import br.com.surb.surbmovie.modules.user.infra.repository.UserRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class MovieReviewService implements MovieReviewServiceImpl {

	private MovieRepository movieRepository;
	private UserRepository userRepository;
	private ScoreRepository scoreRepository;

	@Override
	@PutMapping
	@Transactional
	public MovieDTO update(MovieReviewDTO dto) {

		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		System.out.println("Movies" + movie.getMovieId());
		Score score = new Score();
		score.setUser(user);
		score.setMovie(movie);
		score.setValue(dto.getScore());

		score = scoreRepository.saveAndFlush(score);

		double sum = 0.0;
		for (Score s : movie.getScores()) {
			sum += s.getValue();
		}

		double avg = sum / movie.getScores().size();

		movie.setScore(avg);
		movie.setCount(movie.getScores().size());

		movie = movieRepository.saveAndFlush(movie);

		return new MovieDTO(movie);
	}

	
	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public Page<MovieDTO> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public MovieDTO findById(Long id) {
		// TODO Auto-generated method stub
		return null;
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

}
