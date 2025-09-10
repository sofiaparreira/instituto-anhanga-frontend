"use client"
import React from 'react'
import useCreatePetViewModel from './useCreatePetViewModel'
import InputGroup from '@/components/InputGroup';
import CustomRadio from '@/components/RadioButton';
import { IoChevronDown } from 'react-icons/io5';
import ButtonDefault from '@/components/buttons/ButtonDefault';
import Loading from '@/components/Loading';

const page = () => {

  const {
    createPet,
    setPet,
    pet,
    toggleDropdownAge,
    isDropdownAgeOpen,
    toggleDropdownPorte,
    isDropdownPorteOpen,
    handleUpload,
    isLoading,
    image,
    pet_id,
    updatePet
  } = useCreatePetViewModel();

  const sexoOptions = [
    { id: 'macho', value: 'Macho', label: 'Macho' },
    { id: 'femea', value: 'Fêmea', label: 'Fêmea' }
  ];

  const ageOptions = ['anos', 'meses', 'semanas'];

  const booleanOptions = [
    { id: 'sim', value: true, label: 'Sim' },
    { id: 'nao', value: false, label: 'Não' }
  ];

  const handleSexoChange = (value: string) => {
    setPet(prev => ({ ...prev, sexo: value }));
  };

  const handleBooleanChange = (field: 'isCastrado' | 'isVacinado' | 'isVermifugado', value: boolean) => {
    setPet(prev => ({ ...prev, [field]: value }));
  };



  return (
    <main className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 sm:py-12 lg:py-16'>
      <div className="max-w-4xl mx-auto">
        <h1 className='text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left'>
          {!pet_id ? "Cadastro" : "Editar cadastro"}
        </h1>
        <p className='text-gray-600 text-sm sm:text-base mt-2 text-center sm:text-left'>
          Preencha todas as informações para cadastrar um novo animal no sistema
        </p>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            !pet_id ? createPet(e) : updatePet(pet_id, e);
          }}  
          className='w-full mt-8 sm:mt-12 lg:mt-16 flex flex-col gap-6' 
          action=""
        >

          {/* Tipo */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => setPet(prev => ({ ...prev, tipo: 'Cachorro' }))}
              className={`${pet?.tipo === 'Cachorro' ? 'ring-dark-green bg-green-50' : 'ring-gray-200'} 
                rounded-full ring-2 font-medium cursor-pointer px-4 py-3 sm:py-4 hover:bg-gray-50 duration-300 text-sm sm:text-base`}
            >
              Cachorro
            </button>

            <button
              type="button"
              onClick={() => setPet(prev => ({ ...prev, tipo: 'Gato' }))}
              className={`${pet?.tipo === 'Gato' ? 'ring-dark-green bg-green-50' : 'ring-gray-200'} 
                rounded-full ring-2 font-medium cursor-pointer px-4 py-3 sm:py-4 hover:bg-gray-50 duration-300 text-sm sm:text-base`}
            >
              Gato
            </button>
          </div>

          {/* Nome */}
          <InputGroup
            label='Nome'
            isRequired={true}
            value={pet.nome ?? ""}
            onChange={(e) => {
              setPet((prev) => ({
                ...prev,
                nome: e.target.value
              }))
            }}
          />

          {/* Idade e Sexo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Idade */}
            <div>
              <label className='text-sm font-medium text-gray-800' htmlFor="">
                Idade <span className='text-red-600'>*</span>
              </label>
              <div className="flex w-full mt-2">
                <input
                  value={pet.idade}
                  onChange={(e) =>
                    setPet((prev) => ({
                      ...prev,
                      idade: Number(e.target.value)
                    }))
                  }
                  type="text"
                  required
                  placeholder="Digite um valor"
                  className="flex-1 block rounded-bl-md rounded-tl-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-200 outline-none placeholder:text-gray-400 focus:border-gray-300 focus:ring-1 focus:ring-gray-400 sm:text-sm"
                />
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleDropdownAge}
                    className="bg-gray-100 cursor-pointer rounded-br-md rounded-tr-md h-full border border-l-0 border-gray-300 py-2 px-3 sm:px-4 flex text-xs sm:text-sm items-center gap-2 min-w-fit hover:bg-gray-200 transition-colors"
                  >
                    {pet.idadeUnidade}
                    <IoChevronDown
                      className={`text-gray-800 w-4 h-4 transition-transform ${isDropdownAgeOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isDropdownAgeOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 border-t-0 rounded-b-md shadow-lg z-10">
                      {ageOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setPet(prev => ({ ...prev, idadeUnidade: option }))}
                          className="w-full text-left py-2 px-4 hover:bg-gray-50 cursor-pointer text-sm first:border-t border-gray-100 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sexo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sexo <span className='text-red-600'>*</span>
              </label>
              <div className="flex gap-4 sm:gap-6 lg:gap-8">
                {sexoOptions.map((option) => (
                  <CustomRadio
                    key={option.id}
                    id={option.id}
                    name="petSexo"
                    value={option.value}
                    checked={pet?.sexo === option.value}
                    onChange={handleSexoChange}
                    label={option.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Porte */}
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Porte <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdownPorte}
                className="bg-white cursor-pointer rounded-md w-full ring ring-gray-300 py-2.5 px-4 flex justify-between items-center text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {pet?.porte || "Selecione o porte"}
                <IoChevronDown
                  className={`text-gray-800 w-4 h-4 transition-transform ${isDropdownPorteOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownPorteOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-md bg-white border border-gray-50 rounded-b-md shadow-lg z-10">
                  {["Pequeno", "Médio", "Grande"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setPet((prev) => ({
                          ...prev,
                          porte: option,
                        }));
                        toggleDropdownPorte();
                      }}
                      className="w-full text-left py-2 px-4 hover:bg-gray-50 cursor-pointer text-sm border-t border-gray-100 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Informações de Saúde */}
          <div className="flex flex-col gap-6">
            {/* Castrado */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Castrado <span className='text-red-600'>*</span>
              </label>
              <div className="flex gap-4 sm:gap-6 lg:gap-8">
                {booleanOptions.map((option) => (
                  <CustomRadio
                    key={option.id}
                    id={`castrado-${option.id}`}
                    name="petCastrado"
                    value={String(option.value)}
                    checked={pet?.isCastrado === option.value}
                    onChange={() => handleBooleanChange("isCastrado", option.value)}
                    label={option.label}
                  />
                ))}
              </div>
            </div>

            {/* Vacinado */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vacinado <span className='text-red-600'>*</span>
              </label>
              <div className="flex gap-4 sm:gap-6 lg:gap-8">
                {booleanOptions.map((option) => (
                  <CustomRadio
                    key={option.id}
                    id={`vacinado-${option.id}`}
                    name="petVacinado"
                    value={String(option.value)}
                    checked={pet?.isVacinado === option.value}
                    onChange={() => handleBooleanChange("isVacinado", option.value)}
                    label={option.label}
                  />
                ))}
              </div>
            </div>

            {/* Vermifugado */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vermifugado <span className='text-red-600'>*</span>
              </label>
              <div className="flex gap-4 sm:gap-6 lg:gap-8">
                {booleanOptions.map((option) => (
                  <CustomRadio
                    key={option.id}
                    id={`vermifugado-${option.id}`}
                    name="petVermifugado"
                    value={String(option.value)}
                    checked={pet?.isVermifugado === option.value}
                    onChange={() => handleBooleanChange("isVermifugado", option.value)}
                    label={option.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className='flex flex-col gap-2'>
            <label className="block text-sm font-medium text-gray-800" htmlFor="">
              Descrição
            </label>
            <textarea 
              className={'ring ring-gray-300 rounded-lg p-3 outline-none h-24 sm:h-32 text-sm resize-none'} 
              value={pet.descricao ?? ""}
              onChange={(e) => {
                setPet((prev) => ({
                  ...prev,
                  descricao: e.target.value
                }))
              }}
              placeholder="Descreva as características e personalidade do pet..."
              name="" 
              id=""
            />
          </div>

          {/* Upload de Foto */}
          <div className="mb-4 sm:mb-8">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Foto <span className='text-red-600'>*</span>
            </label>

            {pet.fotoUrl ? (
              <div className="flex items-center justify-between w-full h-12 sm:h-14 border border-slate-200 rounded-lg px-3 sm:px-4 bg-slate-50">
                <span className="text-xs sm:text-sm text-slate-700 truncate pr-2">
                  {image ? `${image.display_name}.${image.format}` : ( pet.fotoUrl ?? 'Sem imagem')}
                </span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap"
                  onClick={() =>
                    setPet((prev) => ({
                      ...prev,
                      fotoUrl: "",
                    }))
                  }
                >
                  Remover
                </button>
              </div>
            ) : (
              <label className="group flex items-center justify-center w-full h-24 sm:h-32 border-2 border-slate-200 border-dashed rounded-lg cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                <div className="flex flex-col items-center justify-center pt-3 pb-3 sm:pt-5 sm:pb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">Clique para enviar</p>
                  <p className="text-xs text-slate-400 hidden sm:block">PNG, JPG, JPEG até 10MB</p>
                </div>
                <input
                  onChange={handleUpload}
                  id="file-upload-3"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                />
              </label>
            )}
          </div>

          <div className="flex justify-center sm:justify-start">
            <ButtonDefault 
              type='submit' 
              text={!pet_id ? "Cadastrar" : "Atualizar"} 
              className="w-full sm:w-auto min-w-32"
            />
          </div>
        </form>
      </div>

      {isLoading && (
        <Loading />
      )}
    </main>
  )
}

export default page