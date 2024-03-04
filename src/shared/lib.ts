import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from "@app/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = <T, >(value: T, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	
	useEffect(() => {
			const timeout = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
			
			return () => clearTimeout(timeout);
		},
		[
			value,
			delay,
		],
	);
	
	return debouncedValue;
};