
const blockNames = ["gold_block", "diamond_block", "oak_log", "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", "mycelium", "podzol", "stripped_oak_log", "stripped_birch_log", "stripped_spruce_log", "stripped_jungle_log", "stripped_acacia_log", "stripped_dark_oak_log", "grass_block", "bedrock", "acacia_log", "lime_terracotta", "acacia_log_top", "lime_wool", "acacia_planks", "magenta_concrete", "andesite", "magenta_terracotta", "birch_leaves", "magenta_wool", "birch_log", "mossy_cobblestone", "birch_log_top", "mossy_stone_bricks", "birch_planks", "mycelium_side", "black_concrete", "black_terracotta", "nether_bricks", "black_wool", "nether_quartz_ore", "blue_concrete", "netherrack", "blue_terracotta", "oak_leaves", "blue_wool", "oak_log", "bricks", "oak_log_top", "brown_concrete", "oak_planks", "brown_terracotta", "obsidian", "brown_wool", "orange_concrete", "chiseled_stone_bricks", "orange_terracotta", "clay", "orange_wool", "coal_block", "pink_concrete", "coal_ore", "pink_terracotta", "coarse_dirt", "pink_wool", "cobblestone", "podzol_side", "cracked_stone_bricks", "cyan_concrete", "polished_andesite", "cyan_terracotta", "polished_diorite", "cyan_wool", "polished_granite", "dark_oak_leaves", "purple_concrete", "dark_oak_log", "purple_terracotta", "dark_oak_log_top", "purple_wool", "dark_oak_planks", "red_concrete", "diamond_ore", "red_nether_bricks", "diorite", "red_sand", "dirt", "red_terracotta", "emerald_ore", "red_wool", "end_stone", "redstone_ore", "end_stone_bricks", "sand", "glowstone", "smooth_stone", "smooth_stone_slab_side", "gold_ore", "snow", "granite", "soul_sand", "grass_block_side", "spruce_leaves", "grass_block_snow", "spruce_log", "spruce_log_top", "grass_path_side", "spruce_planks", "grass_path_top", "stone", "gravel", "stone_bricks", "gray_concrete", "stripped_acacia_log", "gray_terracotta", "stripped_acacia_log_top", "gray_wool", "stripped_birch_log", "green_concrete", "stripped_birch_log_top", "green_terracotta", "stripped_dark_oak_log", "green_wool", "stripped_dark_oak_log_top", "iron_ore", "stripped_jungle_log", "jungle_leaves", "stripped_jungle_log_top", "jungle_log", "stripped_oak_log", "jungle_log_top", "stripped_oak_log_top", "jungle_planks", "stripped_spruce_log", "lapis_ore", "stripped_spruce_log_top", "light_blue_concrete", "terracotta", "light_blue_terracotta", "white_concrete", "light_blue_wool", "white_terracotta", "light_gray_concrete", "white_wool", "light_gray_terracotta", "yellow_concrete", "light_gray_wool", "yellow_terracotta", "lime_concrete", "yellow_wool"];
const bumpNames = ["gold_block", "diamond_block", "oak_log", "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", "mycelium", "podzol", "stripped_oak_log", "stripped_birch_log", "stripped_spruce_log", "stripped_jungle_log", "stripped_acacia_log", "stripped_dark_oak_log", "grass_block", "bedrock", "acacia_log", "lime_terracotta", "acacia_log_top", "lime_wool", "acacia_planks", "magenta_concrete", "andesite", "magenta_terracotta", "magenta_wool", "birch_log", "mossy_cobblestone", "birch_log_top", "mossy_stone_bricks", "birch_planks", "mycelium_side", "black_concrete", "black_terracotta", "nether_bricks", "black_wool", "nether_quartz_ore", "blue_concrete", "netherrack", "blue_terracotta", "blue_wool", "oak_log", "bricks", "oak_log_top", "brown_concrete", "oak_planks", "brown_terracotta", "obsidian", "brown_wool", "orange_concrete", "chiseled_stone_bricks", "orange_terracotta", "clay", "orange_wool", "coal_block", "pink_concrete", "coal_ore", "pink_terracotta", "coarse_dirt", "pink_wool", "cobblestone", "podzol_side", "cracked_stone_bricks", "cyan_concrete", "polished_andesite", "cyan_terracotta", "polished_diorite", "cyan_wool", "polished_granite", "purple_concrete", "dark_oak_log", "purple_terracotta", "dark_oak_log_top", "purple_wool", "dark_oak_planks", "red_concrete", "diamond_ore", "red_nether_bricks", "diorite", "red_sand", "dirt", "red_terracotta", "emerald_ore", "red_wool", "end_stone", "redstone_ore", "end_stone_bricks", "sand", "glowstone", "smooth_stone", "smooth_stone_slab_side", "gold_ore", "snow", "granite", "soul_sand", "grass_block_side", "grass_block_snow", "spruce_log", "spruce_log_top", "grass_path_side", "spruce_planks", "grass_path_top", "stone", "gravel", "stone_bricks", "gray_concrete", "stripped_acacia_log", "gray_terracotta", "stripped_acacia_log_top", "gray_wool", "stripped_birch_log", "green_concrete", "stripped_birch_log_top", "green_terracotta", "stripped_dark_oak_log", "green_wool", "stripped_dark_oak_log_top", "iron_ore", "stripped_jungle_log", "stripped_jungle_log_top", "jungle_log", "stripped_oak_log", "jungle_log_top", "stripped_oak_log_top", "jungle_planks", "stripped_spruce_log", "lapis_ore", "stripped_spruce_log_top", "light_blue_concrete", "terracotta", "light_blue_terracotta", "white_concrete", "light_blue_wool", "white_terracotta", "light_gray_concrete", "white_wool", "light_gray_terracotta", "yellow_concrete", "light_gray_wool", "yellow_terracotta", "lime_concrete", "yellow_wool"];

const cubeMapBlocksList = [
    // "grass_block",
    // "oak_log",
    // "birch_log",
    // "spruce_log",
    // "jungle_log",
    // "acacia_log",
    // "dark_oak_log",
    // "mycelium",
    // "podzol",
    // "stripped_oak_log",
    // "stripped_birch_log",
    // "stripped_spruce_log",
    // "stripped_jungle_log",
    // "stripped_acacia_log",
    // "stripped_dark_oak_log",
];

function getBlockTextures(gl) {
    const texInfos = {};
    blockNames.forEach(function(name) {
        srcName = "./img/texture/" + name + ".png";
        texInfos[name] = {src: srcName };
    });
    return twgl.createTextures(gl, texInfos);
}

function getBumpTextures(gl) {
    const texInfos = {};
    bumpNames.forEach(function(name) {
        srcName = "./img/texture_n/" + name + "_n.png";
        texInfos[name] = {src: srcName };
    });
    return twgl.createTextures(gl, texInfos);
}

function getSkyTexture(gl) {
    const faceInfos = [
        'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/pos-x.jpg',
        'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/neg-x.jpg',
        'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/pos-y.jpg',
        'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/neg-y.jpg',
        'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/pos-z.jpg',
        'https://webglfundamentals.org/webgl/resources/images/computer-history-museum/neg-z.jpg',
    ];
    const imageSrc = [
        "./img/sky/Left.bmp",
        "./img/sky/Right.bmp",
        "./img/sky/Top.bmp",
        "./img/sky/bottom.bmp",
        "./img/sky/Front.bmp",
        "./img/sky/Back.bmp",
    ];
    return twgl.createTexture(gl, {
       target: gl.TEXTURE_CUBE_MAP,
       src: imageSrc
    });
}