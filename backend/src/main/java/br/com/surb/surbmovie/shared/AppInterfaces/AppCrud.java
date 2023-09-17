package br.com.surb.surbmovie.shared.AppInterfaces;

import java.util.List;

public interface AppCrud<D, E> {
	List<E> findAll();

	E findById(D id);

	E create(E entity);

	E update(D id, E entity);

	void delete(D id);
}
