export const createInitialSliceState = <T extends {id: string}>(data: T[]) => {
    return {
        entities: data.reduce(
            (acc, entity) => {
                acc[entity.id] = entity;
                return acc;
            },
            {} as Record<string, T>,
        ),
        ids: data.map((entity) => entity.id),
    };
};
