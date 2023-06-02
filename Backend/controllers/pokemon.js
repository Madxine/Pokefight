const Pokemon = require('../schemas/Pokemon');

const createPokemon = async(req, res)=>{
    try{
        const { 
        name,
        type,
        level,
        attack,
        hp,
        defense,
        moves,
        pokedex,
        url,
        legendary
        } = req.body;
        const pokemon = await Pokemon.create( {
            name,
            type,
            level,
            attack,
            hp,
            defense,
            moves,
            pokedex,
            url,
            legendary
        });
        res.status(201).json({data:pokemon});
    }catch(err){
        res.status(500).json({err})
    }
};

const getAllPokemon = async(req, res) =>{
try{
const pokemons = await Pokemon.find();
!pokemons.length? res.status(200).json({msg:"No such Pokemon in DB"}):
res.status(200).json({data:pokemons});
}catch(err){
res.status(500).json({err})
}
};

const getOnePokemon = async(req, res)=>{
    try{
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);
        pokemon? res.status(200).json({data:pokemon}):
        res.status(404).json({msg: 'No such Pokemon'})
    }catch(err){
        res.status(500).json({err})
    }
};

const updatePokemon = async(req, res)=>{
    try{const { id } = req.params;
    const {
            name,
            type,
            level,
            attack,
            hp,
            defense,
            moves,
            pokedex,
            url,
            legendary
    } = req.body;
   
    const pokemon = await Pokemon.findByIdAndUpdate(
        id,
        {
                name,
                type,
                level,
                attack,
                hp,
                defense,
                moves,
                pokedex,
                url,
                legendary
        },
        {
            new: true
        }
        );
    pokemon? res.status(200).json({msg:'Pokemon updated successfully', data: pokemon}):
    res.status(404).json({msg: 'No such Pokemon'})
    }catch(err){
        res.status(500).json({err})
}
};

const deleteOnePokemon = async(req, res)=>{
    try{const { id } = req.params;
    const pokemon  = await Pokemon.findByIdAndDelete(id);
    pokemon? res.status(200).json({msg:'Pokemon deleted', data: pokemon}):
    res.status(404).json({msg: 'No such Pokemon'})
    }catch(err){
        res.status(500).json({err})
    }
};

module.exports = {
    createPokemon,
    getAllPokemon,
    getOnePokemon,
    updatePokemon,
    deleteOnePokemon,
};