/**
 * Class to score an an allocation, and handle backend for the autoallocation.
 * Weights can be set in the ENV file, or manually when calling the class.
 * @param willingWeight [number] Balancing weight for academic willingness
 * @param expertiseWeight [number] Balancing weight for academic expertise
 * @param priorWeight [number] Balancing weight for years of  prior experience
 * @param timeAvailable [number] Amount of time the academic is available for
 * @param timeRequired [number] Required amount of time for the unit
 */
export default class AutoAllocatorController {

    constructor( private willingWeight: number, private expertiseWeight: number, private priorWeight: number, private timeAvailable: number, private timeRequired: number ) {
    } 



    public scoreAllocation(allocationScores: any) {

        // This multiplier will increase the total score if the person has more time available than the class requires, 
        // and reduce it if they have less according to the magnitude of the difference.
         const timeFitRatio: number = this.timeAvailable / this.timeRequired;

        // Return the weighted sum of the factors scaled according to how well the academic's availability matches the class's requirements.
        return ((this.willingWeight * allocationScores.willingness) + (this.expertiseWeight * allocationScores.expertise) 
            + (this.priorWeight * allocationScores.priorYears)) * timeFitRatio;
    }
}
