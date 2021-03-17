events.listen('item.tags', (event) => {
    event
        .get('enigmatica:stonecutter/sandstone_cutables')
        .add([
            'minecraft:sandstone',
            'minecraft:cut_sandstone',
            'minecraft:chiseled_sandstone',
            'quark:sandstone_bricks',
            'embellishcraft:sandstone_bricks',
            'embellishcraft:sandstone_large_bricks',
            'embellishcraft:sandstone_tiles',
            'embellishcraft:sandstone_paving',
            'embellishcraft:sandstone_paving_stones'
        ]);
    event
        .get('enigmatica:stonecutter/red_sandstone_cutables')
        .add([
            'minecraft:red_sandstone',
            'minecraft:cut_red_sandstone',
            'minecraft:chiseled_red_sandstone',
            'quark:red_sandstone_bricks',
            'embellishcraft:red_sandstone_bricks',
            'embellishcraft:red_sandstone_large_bricks',
            'embellishcraft:red_sandstone_tiles',
            'embellishcraft:red_sandstone_paving',
            'embellishcraft:red_sandstone_paving_stones'
        ]);
    event
        .get('enigmatica:stonecutter/granite_cutables')
        .add([
            'minecraft:granite',
            'minecraft:polished_granite',
            'quark:granite_bricks',
            'quark:chiseled_granite_bricks',
            'quark:granite_pavement',
            'quark:granite_pillar',
            'create:granite_bricks',
            'create:granite_pillar',
            'create:fancy_granite_bricks',
            'create:paved_granite',
            'create:layered_granite',
            'create:mossy_granite',
            'create:overgrown_granite'
        ]);
    event
        .get('enigmatica:stonecutter/diorite_cutables')
        .add([
            'minecraft:diorite',
            'minecraft:polished_diorite',
            'quark:diorite_bricks',
            'quark:chiseled_diorite_bricks',
            'quark:diorite_pavement',
            'quark:diorite_pillar',
            'create:diorite_bricks',
            'create:diorite_pillar',
            'create:fancy_diorite_bricks',
            'create:paved_diorite',
            'create:layered_diorite',
            'create:mossy_diorite',
            'create:overgrown_diorite'
        ]);
    event
        .get('enigmatica:stonecutter/andesite_cutables')
        .add([
            'minecraft:andesite',
            'minecraft:polished_andesite',
            'quark:andesite_bricks',
            'quark:chiseled_andesite_bricks',
            'quark:andesite_pavement',
            'quark:andesite_pillar',
            'create:andesite_bricks',
            'create:andesite_pillar',
            'create:fancy_andesite_bricks',
            'create:paved_andesite',
            'create:layered_andesite',
            'create:mossy_andesite',
            'create:overgrown_andesite'
        ]);
    event
        .get('enigmatica:stonecutter/marble_cutables')
        .add([
            'quark:marble',
            'quark:marble_bricks',
            'quark:chiseled_marble_bricks',
            'quark:marble_pavement',
            'quark:marble_pillar',
            'quark:polished_marble',
            'embellishcraft:marble',
            'astralsorcery:marble_arch',
            'astralsorcery:marble_bricks',
            'astralsorcery:marble_chiseled',
            'astralsorcery:marble_engraved',
            'astralsorcery:marble_raw',
            'astralsorcery:marble_runed'
        ]);
    event
        .get('enigmatica:stonecutter/limestone_cutables')
        .add([
            'quark:limestone',
            'quark:limestone_bricks',
            'quark:chiseled_limestone_bricks',
            'quark:limestone_pavement',
            'quark:limestone_pillar',
            'quark:polished_limestone',
            'create:limestone',
            'create:limestone_bricks',
            'create:limestone_pillar',
            'create:fancy_limestone_bricks',
            'create:paved_limestone',
            'create:chiseled_limestone',
            'create:layered_limestone',
            'create:polished_limestone',
            'create:mossy_limestone',
            'create:overgrown_limestone'
        ]);
    event
        .get('enigmatica:stonecutter/dolomite_cutables')
        .add([
            'create:dolomite',
            'create:dolomite_bricks',
            'create:dolomite_pillar',
            'create:fancy_dolomite_bricks',
            'create:paved_dolomite',
            'create:chiseled_dolomite',
            'create:layered_dolomite',
            'create:polished_dolomite',
            'create:mossy_dolomite',
            'create:overgrown_dolomite'
        ]);
    event
        .get('enigmatica:stonecutter/weathered_limestone_cutables')
        .add([
            'create:weathered_limestone',
            'create:weathered_limestone_bricks',
            'create:weathered_limestone_pillar',
            'create:fancy_weathered_limestone_bricks',
            'create:paved_weathered_limestone',
            'create:chiseled_weathered_limestone',
            'create:layered_weathered_limestone',
            'create:polished_weathered_limestone',
            'create:mossy_weathered_limestone',
            'create:overgrown_weathered_limestone'
        ]);
    event
        .get('enigmatica:stonecutter/gabbro_cutables')
        .add([
            'create:gabbro',
            'create:gabbro_bricks',
            'create:gabbro_pillar',
            'create:fancy_gabbro_bricks',
            'create:paved_gabbro',
            'create:chiseled_gabbro',
            'create:layered_gabbro',
            'create:polished_gabbro',
            'create:mossy_gabbro',
            'create:overgrown_gabbro'
        ]);
    event
        .get('enigmatica:stonecutter/scoria_cutables')
        .add([
            'create:scoria',
            'create:scoria_bricks',
            'create:scoria_pillar',
            'create:fancy_scoria_bricks',
            'create:paved_scoria',
            'create:chiseled_scoria',
            'create:layered_scoria',
            'create:polished_scoria',
            'create:mossy_scoria',
            'create:overgrown_scoria'
        ]);
    event
        .get('enigmatica:stonecutter/dark_scoria_cutables')
        .add([
            'create:dark_scoria',
            'create:dark_scoria_bricks',
            'create:dark_scoria_pillar',
            'create:fancy_dark_scoria_bricks',
            'create:paved_dark_scoria',
            'create:chiseled_dark_scoria',
            'create:layered_dark_scoria',
            'create:polished_dark_scoria',
            'create:mossy_dark_scoria',
            'create:overgrown_dark_scoria'
        ]);
    event
        .get('enigmatica:stonecutter/jasper_cutables')
        .add([
            'quark:jasper',
            'quark:jasper_bricks',
            'quark:chiseled_jasper_bricks',
            'quark:jasper_pavement',
            'quark:jasper_pillar',
            'quark:polished_jasper'
        ]);
    event
        .get('enigmatica:stonecutter/slate_cutables')
        .add([
            'quark:slate',
            'quark:slate_bricks',
            'quark:chiseled_slate_bricks',
            'quark:slate_pavement',
            'quark:slate_pillar',
            'quark:polished_slate'
        ]);
    event
        .get('enigmatica:stonecutter/basalt_cutables')
        .add([
            'quark:basalt',
            'quark:basalt_bricks',
            'quark:chiseled_basalt_bricks',
            'quark:basalt_pavement',
            'quark:basalt_pillar',
            'quark:polished_basalt'
        ]);
    event
        .get('enigmatica:stonecutter/myalite_cutables')
        .add([
            'quark:myalite',
            'quark:myalite_bricks',
            'quark:chiseled_myalite_bricks',
            'quark:myalite_pavement',
            'quark:myalite_pillar',
            'quark:polished_myalite'
        ]);
        
    event
        .get('enigmatica:stonecutter/pnc_stone_cutables')
        .add([
            'pneumaticcraft:reinforced_stone',
            'pneumaticcraft:reinforced_bricks',
            'pneumaticcraft:reinforced_brick_tile',
            'pneumaticcraft:reinforced_brick_pillar'
        ]);
    
    event
        .get('enigmatica:stonecutter/ars_arcane_cutables')
        .add([
        	'ars_nouveau:arcane_stone',
        	'ars_nouveau:arcane_bricks',
            'ars_nouveau:ab_smooth',
            'ars_nouveau:ab_smooth_slab',
            'ars_nouveau:ab_clover',
            'ars_nouveau:ab_mosaic',
            'ars_nouveau:ab_herring',
            'ars_nouveau:ab_basket',
            'ars_nouveau:ab_alternating'
        ]);
        
    event
        .get('enigmatica:stonecutter/embellish_basalt_cutables_raw')
        .add([
            'embellishcraft:basalt',
            'embellishcraft:basalt_bricks',
            'embellishcraft:basalt_large_bricks'
            
        ]);
    event
        .get('enigmatica:stonecutter/embellish_basalt_cutables_smooth')
        .add([
            'embellishcraft:smooth_basalt',
            'embellishcraft:polished_basalt',
            'embellishcraft:basalt_paving',
            'embellishcraft:basalt_tiles',
            'embellishcraft:basalt_ornament',
        ]);
    event
        .get('enigmatica:stonecutter/embellish_slate_cutables_raw')
        .add([
            'embellishcraft:slate',
            'embellishcraft:slate_bricks',
            'embellishcraft:slate_large_bricks'
            
        ]);
    event
        .get('enigmatica:stonecutter/embellish_slate_cutables_smooth')
        .add([
            'embellishcraft:smooth_slate',
            'embellishcraft:polished_slate',
            'embellishcraft:slate_paving',
            'embellishcraft:slate_tiles',
            'embellishcraft:slate_ornament',
        ]);
    event
        .get('enigmatica:stonecutter/embellish_marble_cutables_raw')
        .add([
            'embellishcraft:marble',
            'embellishcraft:marble_bricks',
            'embellishcraft:marble_large_bricks'
            
        ]);
    event
        .get('enigmatica:stonecutter/embellish_marble_cutables_smooth')
        .add([
            'embellishcraft:smooth_marble',
            'embellishcraft:polished_marble',
            'embellishcraft:marble_paving',
            'embellishcraft:marble_tiles',
            'embellishcraft:marble_ornament',
        ]);
    event
        .get('enigmatica:stonecutter/embellish_gneiss_cutables_raw')
        .add([
            'embellishcraft:gneiss',
            'embellishcraft:gneiss_bricks',
            'embellishcraft:gneiss_large_bricks'
            
        ]);
    event
        .get('enigmatica:stonecutter/embellish_gneiss_cutables_smooth')
        .add([
            'embellishcraft:smooth_gneiss',
            'embellishcraft:polished_gneiss',
            'embellishcraft:gneiss_paving',
            'embellishcraft:gneiss_tiles',
            'embellishcraft:gneiss_ornament',
        ]);
    event
        .get('enigmatica:stonecutter/embellish_jade_cutables_raw')
        .add([
            'embellishcraft:jade',
            'embellishcraft:jade_bricks',
            'embellishcraft:jade_large_bricks'
            
        ]);
    event
        .get('enigmatica:stonecutter/embellish_jade_cutables_smooth')
        .add([
            'embellishcraft:smooth_jade',
            'embellishcraft:polished_jade',
            'embellishcraft:jade_paving',
            'embellishcraft:jade_tiles',
            'embellishcraft:jade_ornament',
        ]);
    event
        .get('enigmatica:stonecutter/embellish_larvikite_cutables_raw')
        .add([
            'embellishcraft:larvikite',
            'embellishcraft:larvikite_bricks',
            'embellishcraft:larvikite_large_bricks'
            
        ]);
    event
        .get('enigmatica:stonecutter/embellish_larvikite_cutables_smooth')
        .add([
            'embellishcraft:smooth_larvikite',
            'embellishcraft:polished_larvikite',
            'embellishcraft:larvikite_paving',
            'embellishcraft:larvikite_tiles',
            'embellishcraft:larvikite_ornament',
        ]);
});