package app.service;

import app.dto.CarroDTO;
import app.entity.Carro;
import app.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarroService {
    @Autowired
    CarroRepository carroRepository;

    public List<CarroDTO> listAll(){
        List<Carro> lista = carroRepository.findAll();
        List<CarroDTO> listaDTO = new ArrayList<>();

        for (Carro carro : lista) listaDTO.add(this.toCarroDTO(carro));

        return listaDTO;
    }

    public CarroDTO save(CarroDTO carroDTO){
        Carro carro = this.toCarro(carroDTO);

        Carro carroSalvo = carroRepository.save(carro);

        return this.toCarroDTO(carroSalvo);
    }

    private CarroDTO toCarroDTO(Carro carro) {
        CarroDTO carroDTO = new CarroDTO();
        carroDTO.setId(carro.getId());
        carroDTO.setMarca(carro.getMarca());
        carroDTO.setAno(carro.getAno());
        return carroDTO;
    }

    private Carro toCarro(CarroDTO carroDTO) {
        Carro carro = new Carro();
        carro.setId(carroDTO.getId());
        carro.setMarca(carroDTO.getMarca());
        carro.setAno(carroDTO.getAno());
        return carro;
    }


}
