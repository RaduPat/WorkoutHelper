
const config = {
    'ExerciseDict' : {
        "Monday":["Squat","FrontSquat","Deadlift","Leg Press","Planks","Crunches"],
        "Tuesday":["Dumbell Press","Fly pull","Incline bench","Inward pushups","Machine Press"],
        "Wednesday": ["Pullups","Rows","Lat Pulldown","Dumbell Pull","Machine Pull"],
        "Thursday": ["Bicep Pullups","Curls","Dips","Tricep Pulldowns"]
    },
    'dummyDay' : [
        {"day":"Monday", "exercises":[ {"exercise": "Squat", "info": {"reps":"0*0","weight":"0" } }, {"exercise": "FrontSquat", "info": {"reps":"0*0","weight":"0" } } ] },
        {"day":"Tuesday","exercises":[] }, 
        {"day":"Wednesday","exercises": [] },
        {"day":"Thursday","exercises": [] }
    ]
}

export default config