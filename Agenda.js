var agenda = new Array()

function gerar(nome, contato) {
    agenda.push([nome, contato])
    return agenda
}

function listar(array) {
    let texto = ""
    for (let i = 0; i < array.length; i++) {
        texto += (`NOME: ${array[i][0]} CONTATO: ${array[i][1]} \n`)
    }
    return window.alert(String(texto))
}

function buscar(nome, array) {
    for (let i = 0; i < array.length; i++) {
        if (nome == array[i][0]) {
            return window.alert(String(` NOME: ${array[i][0]} \n CONTATO: ${array[i][1]} \n`))
        } else {
            return window.alert("Número INEXISTENTE nos registros.")
        }
    }
}

function deletar(contato, array) {
    for (let i = 0; i < array.length; i++) {
        if (contato == array[i][1]) {
            array.splice(i, i + 1)
            return window.alert("Número DELETADO dos registros.")

        } else {
            return window.alert("Número INEXISTENTE nos registros.")
        }
    }
}

do {
    var select = prompt(` 01 ---------- GRAVAR
    \n 2 ---------- LISTAR
    \n 3 ---------- BUSCAR
    \n 4 ---------- DELETAR`)

    if (select == "01") {
        let nome = prompt("NOME do contato: ")
        let numero = prompt("NÚMERO do contato: ")
        var cadastro = gerar(nome, numero)

    } else if (select == "02") {
        listar(cadastro)

    } else if (select == "03") {
        let contato = prompt("Insira o NOME do contato: ")
        buscar(contato, agenda)

    } else if (select == "4") {
        let numero = prompt("Insira o NÚMERO do contato: ")
        deletar(numero, agenda)

    } else {
        print("Selecione uma OPÇÃO VÁLIDA.")
    }

} while (confirm("RETORNAR à página inicial? ") ? true : false);