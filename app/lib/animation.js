export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
        },
    },
};

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -80,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
        },
    },
};

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
        },
    },
};

export const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: .15,
        },
    },
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .6,
        },
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: .8,
        },
    },
};
