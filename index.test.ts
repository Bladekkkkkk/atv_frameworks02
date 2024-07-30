import { test,expect } from 'vitest';

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código

function criaNovoVetor(vetor:number[],valor1:number,valor2:number){
    return [...vetor, valor1,valor2]
  }

//Fim do seu código

test('criaNovoVetor com os novos dois valores passados', () => {
    let vetor = [1, 2, 3]
    expect(criaNovoVetor(vetor, 4, 5)).toEqual([1, 2, 3, 4, 5])
    expect(vetor).toEqual([1, 2, 3])
})
test('criaNovoVetor com os novos dois valores passados', () => {
    let vetor = [1, 2, 3]
    expect(criaNovoVetor(vetor, 0, 0)).toEqual([1, 2, 3, 0, 0])
    expect(vetor).toEqual([1, 2, 3])
})