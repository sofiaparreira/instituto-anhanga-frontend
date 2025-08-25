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
    image
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
    <main className='px-32 py-16'>
      <h1 className='text-xl font-bold'>Cadastro de Pet</h1>
      <p className='text-gray-600 text-sm'>Preencha todas as informações para cadastrar um novo animal no sistema</p>

      <form onSubmit={createPet} className='w-2/3 mt-16 flex flex-col gap-6' action="">

        {/* Tipo */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <button
            type="button"
            onClick={() => setPet(prev => ({ ...prev, tipo: 'Cachorro' }))}
            className={`${pet?.tipo === 'Cachorro' ? 'ring-dark-green' : 'ring-gray-200'} 
              rounded-full ring-2 font-medium cursor-pointer px-4 py-3 hover:bg-gray-50 duration-300`}
          >
            Cachorro
          </button>

          <button
            type="button"
            onClick={() => setPet(prev => ({ ...prev, tipo: 'Gato' }))}
            className={`${pet?.tipo === 'Gato' ? 'ring-dark-green' : 'ring-gray-200'} 
              rounded-full ring-2 font-medium cursor-pointer px-4 py-3 hover:bg-gray-50 duration-300`}
          >
            Gato
          </button>
        </div>

        {/* Nome */}
        <InputGroup
          label='Nome'
          isRequired={true}
          onChange={(e) => {
            setPet((prev) => ({
              ...prev,
              nome: e.target.value
            }))
          }}
        />

        {/* Sexo */}
        <div className="grid grid-cols-2 gap-x-32 gap-y-6">

          {/* Idade */}
          <div className=''>
            <label className='text-sm font-medium text-gray-800' htmlFor="">Idade</label>
            <div className="flex w-full">
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
                  className="bg-gray-100 cursor-pointer rounded-br-md rounded-tr-md h-full border border-l-0 border-gray-300 py-2 px-4 flex text-sm items-center gap-2 min-w-fit hover:bg-gray-200 transition-colors"
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sexo <span className='text-red-600'>*</span>
            </label>
            <div className="flex gap-8">
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
          <div className="w-full">
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
                  className={`text-gray-800 w-4 h-4 transition-transform ${pet?.porte ? "rotate-180" : ""}`}
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

        </div>

        {/* Porte */}


        {/* Castrado */}
        <div className="flex flex-col gap-6 ">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Castrado <span className='text-red-600'>*</span>
            </label>
            <div className="flex gap-8">
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
            <div className="flex gap-8">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vermifugado <span className='text-red-600'>*</span>
            </label>
            <div className="flex gap-8">
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

        <div className='flex flex-col gap-1'>
          <label className="block text-sm font-medium text-gray-800" htmlFor="">Descrição</label>
          <textarea className={'ring ring-gray-300 rounded-lg p-3 outline-none h-32 text-sm'} name="" id=""></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-800">Foto</label>

          {pet.fotoUrl ? (
            <div className="flex items-center justify-between w-full h-12 border border-slate-200 rounded-lg px-3 bg-slate-50">
              <span className="text-sm text-slate-700 truncate">{`${image?.display_name}.${image.format}`}</span>
              <button
                type="button"
                className="text-red-500 hover:text-red-700 text-sm font-medium cursor-pointer"
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
            <label className="group flex items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-lg cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className="w-10 h-10 mb-3 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
                  </svg>
                </div>
                <p className="text-sm text-slate-600 font-medium">Clique para enviar</p>
                <p className="text-xs text-slate-400">PNG, JPG, JPEG até 10MB</p>
              </div>
              <input
                onChange={handleUpload}
                id="file-upload-3"
                type="file"
                className="sr-only"
              />
            </label>
          )}
        </div>

        <ButtonDefault type='submit' text='Cadastrar' />
      </form>
      {isLoading && (
        <Loading />
      )}
    </main>
  )
}

export default page
