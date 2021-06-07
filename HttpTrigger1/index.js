module.exports = async function (context, req) {
    context.log('Generar Tweet');
    context.res = {
        body: "Hola genere un bot"
    };
}; 

}