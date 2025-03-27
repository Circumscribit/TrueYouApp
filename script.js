
function generateTrueYou() {
    // Base traits per archetype
    const archetypeTraits = {
        alpha_jock: {
            heightMod: 2, // taller
            iqRange: "Average (90-110)",
            builds: ["Athletic", "Massive"],
            scent: ["Strong musk", "Overpowering"],
            hairiness: ["Moderate hair", "Very hairy"]
        },
        himbo: {
            heightMod: 1, // slightly taller
            iqRange: "Low (70-85)",
            builds: ["Athletic", "Bulky"],
            scent: ["Mild musk", "Strong musk"],
            hairiness: ["Light hair", "Moderate hair"]
        },
        puppy: {
            heightMod: -1, // shorter
            iqRange: "Low (70-85)",
            builds: ["Lean", "Athletic"],
            scent: ["Fresh", "Mild musk"],
            hairiness: ["Smooth", "Light hair"]
        },
        frat: {
            heightMod: 1,
            iqRange: "Average (90-110)",
            builds: ["Athletic", "Lean"],
            scent: ["Fresh", "Mild musk"],
            hairiness: ["Light hair", "Moderate hair"]
        },
        twunk: {
            heightMod: 0,
            iqRange: "Average (90-110)",
            builds: ["Lean", "Athletic"],
            scent: ["Fresh", "Mild musk"],
            hairiness: ["Smooth", "Light hair"]
        },
        cornfed: {
            heightMod: 1,
            iqRange: "Average (90-110)",
            builds: ["Bulky", "Massive"],
            scent: ["Mild musk", "Strong musk"],
            hairiness: ["Moderate hair", "Very hairy"]
        },
        prettyboy: {
            heightMod: 0,
            iqRange: "High (115-130)",
            builds: ["Lean", "Athletic"],
            scent: ["Fresh"],
            hairiness: ["Smooth"]
        },
        badboy: {
            heightMod: 1,
            iqRange: "Average (90-110)",
            builds: ["Athletic", "Bulky"],
            scent: ["Strong musk"],
            hairiness: ["Moderate hair"]
        },
        bull: {
            heightMod: 2,
            iqRange: "Average (90-110)",
            builds: ["Bulky", "Massive"],
            scent: ["Strong musk", "Overpowering"],
            hairiness: ["Very hairy"]
        }
    };

    // Names based on ethnicity
    const ethnicNames = {
        Caucasian: ["Jake", "Mason", "Chad", "Brad", "Tyler"],
        Black: ["DeAndre", "Marcus", "Jamal", "Malik", "Darius"],
        Latino: ["Miguel", "Carlos", "Luis", "Diego", "Antonio"],
        Asian: ["Jin", "Kai", "Lee", "Chen", "Ryu"],
        "Middle Eastern": ["Ali", "Hassan", "Ahmed", "Karim", "Omar"],
        Mixed: ["Alex", "Jordan", "Adrian", "Ryan", "Kyle"]
    };

    let selectedArchetype = document.getElementById("archetype").value;
    if (selectedArchetype === "random") {
        selectedArchetype = Object.keys(archetypeTraits)[Math.floor(Math.random() * Object.keys(archetypeTraits).length)];
    }

    let desiredEthnicity = document.getElementById("desired_ethnicity").value;
    if (desiredEthnicity === "random") {
        desiredEthnicity = Object.keys(ethnicNames)[Math.floor(Math.random() * Object.keys(ethnicNames).length)];
    }

    const traits = archetypeTraits[selectedArchetype];
    // Generate name based on ethnicity
    const name = ethnicNames[desiredEthnicity][Math.floor(Math.random() * ethnicNames[desiredEthnicity].length)];

    // Height calculation
    const baseHeights = ["5'8\"", "5'10\"", "6'0\"", "6'2\"", "6'4\""];
    let heightIndex = Math.min(Math.max(0, 2 + traits.heightMod), baseHeights.length - 1);
    const height = baseHeights[heightIndex];

    // Build calculation
    let build = traits.builds[Math.floor(Math.random() * traits.builds.length)];
    

    // Weight based on height and build
    const weightRanges = {
        "Lean": { base: 150, increment: 10 },
        "Athletic": { base: 170, increment: 15 },
        "Bulky": { base: 190, increment: 20 },
        "Massive": { base: 210, increment: 25 }
    };
    const weightBase = weightRanges[build].base;
    const weight = weightBase + (heightIndex * weightRanges[build].increment);

    // Scent calculation
    let scent = traits.scent[Math.floor(Math.random() * traits.scent.length)];
    // Intelligence calculation
    let iq = traits.iqRange;

    // Body hair based on ethnicity and archetype
    let hairiness = traits.hairiness[Math.floor(Math.random() * traits.hairiness.length)];

    // Penis size calculation (influenced by height and build)
    const baseSizes = ["5 inches", "6 inches", "7 inches", "8 inches"];
    const penisSize = baseSizes[Math.min(heightIndex, baseSizes.length - 1)] + (build === "Massive" ? ", thick" : ", average girth");

    // Generate result
    document.getElementById("result").innerHTML = `
        <strong>${archetypeTraits[selectedArchetype].description || "You've transformed into your true self!"}</strong><br>
        <strong>Name:</strong> ${name} <br>
        <strong>Ethnicity:</strong> ${desiredEthnicity} <br>
        <strong>Height:</strong> ${height} <br>
        <strong>Weight:</strong> ${weight} lbs <br>
        <strong>Build:</strong> ${build} <br>
        <strong>Intelligence:</strong> ${iq} <br>
        <strong>Body Type:</strong> ${hairiness} <br>
        <strong>Natural Scent:</strong> ${scent} <br>
        <strong>Endowment:</strong> ${penisSize} <br>
    `;
}
