export const createInitialSliceState = <T extends {id: string}>(data: T[]) => {
    return {
        entities: data.reduce<Record<string, T>>((acc, entity) => {
            acc[entity.id] = entity;
            return acc;
        }, {}),
        ids: data.map((entity) => entity.id),
    };
};
