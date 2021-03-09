const habitItemSchema = {
    test: {
        type: 'number',
        default: 25
    }

    /*
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        uom: {
            type: 'string',
        },
        data: {
            type: 'Map', // TODO: clean up this data type
            Map: {
                key: 'Date object',
                value: 'int'
            }
        }
    },
    */
};

module.exports = habitItemSchema;
