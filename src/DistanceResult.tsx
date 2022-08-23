export interface IDistanceResult {
    value: number | undefined,
    unit: string | undefined
}

function DistanceResult(props?: IDistanceResult) {
  return (
    <div>
        Result : {props?.value} {props?.unit}  
    </div>
  );
}

export default DistanceResult;