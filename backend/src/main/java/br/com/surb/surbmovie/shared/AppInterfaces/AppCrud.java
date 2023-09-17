package br.com.surb.surbmovie.shared.AppInterfaces;

import org.springframework.data.domain.Page;

public interface AppCrud<ID, DTO, UPDTO, P> {
	Page<DTO> findAll(P pageable);

	DTO findById(ID id);

	DTO create(DTO dto);

	DTO update(ID id, DTO dto);
	
	UPDTO update(DTO dto);

	void updateVoid(DTO dto);

	void delete(ID id);
}
