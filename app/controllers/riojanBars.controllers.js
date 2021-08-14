const BarsSite = require('../models/riojanBars.model')

const getBarsSites = async(req, res ) => {
    
    const barstSite = await BarsSite.find({}, 'name location photo_url lat long description tags');
    
    res.json({
        ok: true, 
        barstSite
    }) 

} 

const getBarsSite = async(req, res) => {
    
    const _id = req.params.id
    
    try {
        
        const barsSiteDB = await BarsSite.findById(_id);

        if(!barsSiteDB){

            res.status(404).json({
                ok: false, 
                msg: "error, the bars site does not exist"
            })
        }

        res.status(404).json({
            ok: true, 
            barsSiteDB
        })

    } catch (error) {
    
        res.status(500).json({
            ok:false, 
            msg: "unexpected error"
        })
    }
}

const addBarsSite = async(req, res) => {
    
    const { name } = req.body;

    try {

        const existsSite = await BarsSite.findOne({ name });

        if ( existsSite ) {
            return res.status(400).json({
                ok: false,
                msg: 'error, the bars site is already registered'
            });
        }

        const barsSite = new BarsSite( req.body );
    
        await barsSite.save();

        res.json({
            ok: true,
            barsSite,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'unexpected error'
        });
    }

}

const editBarsSite = async(req, res)=>{
    
    const _id = req.params.id
    
    const barsSite = req.body;
    
    try { 

        const barsSiteDB = await BarsSite.findById(_id);

        if(!barsSiteDB){

           return res.status(404).json({
                ok: false, 
                msg: "error, the bars site does not exist"
            })
        }

        const updatedData = await BarsSite.findOneAndUpdate( _id, barsSite );

        res.status(404).json({
            ok: true,
            BarsSite: updatedData
        });

    }catch(error) {

        res.status(500).json({
            ok: false,
            msg: 'unexpected error'
        })
    }
}

const deleteBarsSite = async(req, res) =>{
    
    const _id = req.params.id
    
    try {
        
        const barsSiteDB = await BarsSite.findById(_id);

        if(!barsSiteDB){

            res.status(404).json({
                ok: false, 
                msg: "error, the bars site does not exist"
            })
        }

        await BarsSite.findByIdAndDelete(_id);

        res.status(404).json({
            ok: true, 
            msg: "_bars site removed"
        })

    } catch (error) {
    
        res.status(500).json({
            ok:false, 
            msg: "the bars site cannot be deleted"
        })
    }

}



module.exports = {
    getBarsSites, 
    getBarsSite, 
    addBarsSite,
    editBarsSite,
    deleteBarsSite
}