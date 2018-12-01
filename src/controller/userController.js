import { filter, reduce } from 'lodash'
import userModel from './../model/UserModel'

export async function details (req, res) {

    const id= req.params.id
    const user = await userModel.findOne({ _id: id });
    
    if (user) {
        return await res.send({
            resCode : 1,
            user: user
        })
    }

    return await res.send({
        resCode : -1,
        user: null,
        msg: `data not found`
    })

}

export async function create (req, res) {

    try {
        const fn = req.body.first_name
        const ln = req.body.last_name

        if (!fn || !ln) {
            return await res.send({
                resCode : -1,
                msg: `please fill all required fields`
            })
        }

        const user = new userModel;
        user.first_name = fn
        user.last_name = ln

        if (!user.save()) {
            return await res.send({
                resCode : -1,
                msg: `Unable to save data`
            })
        }
        
        return await res.send({
            resCode : 1,
            msg: `Data successfully saved`,
            user
        })

    } catch (error) {

        return await res.send({
            resCode : -1,
            msg: `error occured`
        })

    }
}

export async function list (req, res) {
    try {

        const usersList = await userModel.find({});
        return await res.send({
            resCode : 1,
            list: usersList
        })

    } catch (error) {
        
        return await res.send({
            resCode : -1,
            user: null,
            msg: `error occured`
        })
        
    }
}


export async function update (req, res) {

    try {

        const id = req.params.id
        const fn = req.body.first_name
        const ln = req.body.last_name

        if (!fn || !ln || !id) {
            return await res.send({
                resCode : -1,
                msg: `please fill all required fields`
            })
        }

        const user = await userModel.findOne({ _id: id })

        if (user) {
            
            user.first_name = fn
            user.last_name = ln

            if (!user.save()) {
                return await res.send({
                    resCode : -1,
                    user: null,
                    msg: `unable to save`
                })
            }

            return await res.send({
                resCode : 1,
                user: user
            })
        }

        return await res.send({
            resCode : -1,
            user: null,
            msg: `data not found`
        })

    } catch (error) {
        return await res.send({
            resCode : -1,
            msg: `error occured`
        })
    }
}

export async function deleteData (req, res) {

    const id= req.params.id

    const user = await userModel.findOneAndDelete({ _id: id });
    if (user) {
        return await res.send({
            resCode : 1,
            user: user,
            msg: `data successfully deleted`
        })
    }

    return await res.send({
        resCode : -1,
        user: null,
        msg: `data not found`
    })

}

export default {
    list,
    details,
    create,
    update,
    deleteData
}